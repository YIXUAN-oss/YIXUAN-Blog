---
title: Vue 3 Composition API 实战指南
date: 2025-10-14
categories:
  - 前端开发
tags:
  - Vue3
  - JavaScript
  - Composition API
author: 懿轩
---

# Vue 3 Composition API 实战指南

Vue 3 的 Composition API 为我们提供了更灵活的代码组织方式。本文将深入探讨如何在实际项目中使用 Composition API。

## 🎯 为什么使用 Composition API

### Options API 的局限性

```vue
<!-- Options API 的问题：相关逻辑分散 -->
<script>
export default {
  data() {
    return {
      count: 0,
      user: null
    }
  },
  methods: {
    increment() {
      this.count++
    },
    fetchUser() {
      // 获取用户逻辑
    }
  },
  mounted() {
    this.fetchUser()
  }
}
</script>
```

### Composition API 的优势

- **逻辑复用更方便**
- **类型推导更友好**
- **代码组织更灵活**
- **更好的 Tree-shaking**

## 📝 基础用法

### setup() 函数

```vue
<script setup>
import { ref, computed, onMounted } from 'vue'

// 响应式状态
const count = ref(0)

// 计算属性
const doubleCount = computed(() => count.value * 2)

// 方法
function increment() {
  count.value++
}

// 生命周期钩子
onMounted(() => {
  console.log('组件已挂载')
})
</script>

<template>
  <div>
    <p>Count: {{ count }}</p>
    <p>Double: {{ doubleCount }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>
```

## 🔄 响应式系统

### ref vs reactive

```javascript
import { ref, reactive } from 'vue'

// ref - 适合基本类型
const count = ref(0)
console.log(count.value) // 需要 .value

// reactive - 适合对象
const state = reactive({
  count: 0,
  name: 'Vue'
})
console.log(state.count) // 不需要 .value
```

### toRefs 解构响应式对象

```javascript
import { reactive, toRefs } from 'vue'

const state = reactive({
  foo: 1,
  bar: 2
})

// 错误：失去响应性
const { foo, bar } = state

// 正确：保持响应性
const { foo, bar } = toRefs(state)
```

## 🎨 组合式函数（Composables）

### 创建可复用的逻辑

```javascript
// composables/useCounter.js
import { ref, computed } from 'vue'

export function useCounter(initialValue = 0) {
  const count = ref(initialValue)
  const doubleCount = computed(() => count.value * 2)
  
  function increment() {
    count.value++
  }
  
  function decrement() {
    count.value--
  }
  
  function reset() {
    count.value = initialValue
  }
  
  return {
    count,
    doubleCount,
    increment,
    decrement,
    reset
  }
}
```

### 使用组合式函数

```vue
<script setup>
import { useCounter } from '@/composables/useCounter'

const { count, doubleCount, increment, decrement, reset } = useCounter(10)
</script>

<template>
  <div>
    <p>Count: {{ count }}</p>
    <p>Double: {{ doubleCount }}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="reset">Reset</button>
  </div>
</template>
```

## 🌐 实战案例：数据获取

### 创建 useFetch 组合式函数

```javascript
// composables/useFetch.js
import { ref, watchEffect } from 'vue'

export function useFetch(url) {
  const data = ref(null)
  const error = ref(null)
  const loading = ref(false)
  
  const fetchData = async () => {
    loading.value = true
    error.value = null
    
    try {
      const response = await fetch(url.value)
      data.value = await response.json()
    } catch (e) {
      error.value = e
    } finally {
      loading.value = false
    }
  }
  
  watchEffect(() => {
    if (url.value) {
      fetchData()
    }
  })
  
  return { data, error, loading, refetch: fetchData }
}
```

### 使用示例

```vue
<script setup>
import { ref } from 'vue'
import { useFetch } from '@/composables/useFetch'

const userId = ref(1)
const url = computed(() => `https://api.example.com/users/${userId.value}`)

const { data: user, error, loading, refetch } = useFetch(url)
</script>

<template>
  <div>
    <div v-if="loading">加载中...</div>
    <div v-else-if="error">错误: {{ error.message }}</div>
    <div v-else-if="user">
      <h2>{{ user.name }}</h2>
      <p>{{ user.email }}</p>
    </div>
    <button @click="refetch">刷新</button>
  </div>
</template>
```

## 🎭 表单处理

### useForm 组合式函数

```javascript
// composables/useForm.js
import { reactive, computed } from 'vue'

export function useForm(initialValues, validate) {
  const values = reactive({ ...initialValues })
  const errors = reactive({})
  const touched = reactive({})
  
  const isValid = computed(() => {
    return Object.keys(errors).length === 0
  })
  
  function handleChange(field, value) {
    values[field] = value
    touched[field] = true
    validateField(field)
  }
  
  function validateField(field) {
    const error = validate[field]?.(values[field])
    if (error) {
      errors[field] = error
    } else {
      delete errors[field]
    }
  }
  
  function validateAll() {
    Object.keys(values).forEach(validateField)
    return isValid.value
  }
  
  function reset() {
    Object.assign(values, initialValues)
    Object.keys(errors).forEach(key => delete errors[key])
    Object.keys(touched).forEach(key => delete touched[key])
  }
  
  return {
    values,
    errors,
    touched,
    isValid,
    handleChange,
    validateAll,
    reset
  }
}
```

### 使用示例

```vue
<script setup>
import { useForm } from '@/composables/useForm'

const initialValues = {
  username: '',
  email: '',
  password: ''
}

const validate = {
  username: (value) => {
    if (!value) return '用户名不能为空'
    if (value.length < 3) return '用户名至少3个字符'
  },
  email: (value) => {
    if (!value) return '邮箱不能为空'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return '邮箱格式不正确'
    }
  },
  password: (value) => {
    if (!value) return '密码不能为空'
    if (value.length < 6) return '密码至少6个字符'
  }
}

const { values, errors, handleChange, validateAll, reset } = useForm(
  initialValues,
  validate
)

const handleSubmit = () => {
  if (validateAll()) {
    console.log('提交表单:', values)
  }
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <input
        v-model="values.username"
        @blur="handleChange('username', values.username)"
        placeholder="用户名"
      />
      <span v-if="errors.username">{{ errors.username }}</span>
    </div>
    
    <div>
      <input
        v-model="values.email"
        @blur="handleChange('email', values.email)"
        placeholder="邮箱"
      />
      <span v-if="errors.email">{{ errors.email }}</span>
    </div>
    
    <div>
      <input
        type="password"
        v-model="values.password"
        @blur="handleChange('password', values.password)"
        placeholder="密码"
      />
      <span v-if="errors.password">{{ errors.password }}</span>
    </div>
    
    <button type="submit">提交</button>
    <button type="button" @click="reset">重置</button>
  </form>
</template>
```

## 🔐 状态管理

### 使用 Pinia

```javascript
// stores/user.js
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useUserStore = defineStore('user', () => {
  // State
  const user = ref(null)
  const token = ref(null)
  
  // Getters
  const isLoggedIn = computed(() => !!token.value)
  const userName = computed(() => user.value?.name || 'Guest')
  
  // Actions
  async function login(credentials) {
    const response = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify(credentials)
    })
    const data = await response.json()
    user.value = data.user
    token.value = data.token
  }
  
  function logout() {
    user.value = null
    token.value = null
  }
  
  return {
    user,
    token,
    isLoggedIn,
    userName,
    login,
    logout
  }
})
```

## 📊 性能优化

### 使用 shallowRef 和 shallowReactive

```javascript
import { shallowRef, triggerRef } from 'vue'

// 只有根级别的属性是响应式的
const state = shallowRef({
  foo: {
    bar: {
      baz: 1
    }
  }
})

// 修改嵌套属性不会触发更新
state.value.foo.bar.baz = 2

// 需要手动触发
triggerRef(state)
```

### 使用 computed 缓存

```javascript
import { ref, computed } from 'vue'

const numbers = ref([1, 2, 3, 4, 5])

// 使用 computed 缓存计算结果
const sum = computed(() => {
  console.log('计算中...')
  return numbers.value.reduce((a, b) => a + b, 0)
})

// 多次访问不会重新计算
console.log(sum.value)
console.log(sum.value)
```

## 💡 最佳实践

### 组合式函数命名规范

- 以 `use` 开头
- 使用驼峰命名
- 见名知意

### 文件组织

```
src/
├── components/
│   ├── common/
│   └── features/
├── composables/
│   ├── useAuth.js
│   ├── useFetch.js
│   └── useForm.js
├── stores/
│   ├── user.js
│   └── cart.js
└── views/
```

### 类型安全

```typescript
// 使用 TypeScript 提供类型支持
import { ref, Ref } from 'vue'

interface User {
  id: number
  name: string
  email: string
}

export function useUser(): {
  user: Ref<User | null>
  fetchUser: (id: number) => Promise<void>
} {
  const user = ref<User | null>(null)
  
  async function fetchUser(id: number) {
    const response = await fetch(`/api/users/${id}`)
    user.value = await response.json()
  }
  
  return {
    user,
    fetchUser
  }
}
```

## 🎓 总结

Composition API 为 Vue 3 带来了更强大的代码组织能力：

- ✅ 更好的逻辑复用
- ✅ 更好的类型推导
- ✅ 更灵活的代码组织
- ✅ 更小的打包体积

掌握 Composition API 将大大提升你的 Vue 3 开发效率！

## 📚 参考资源

- [Vue 3 官方文档](https://vuejs.org/)
- [Composition API RFC](https://github.com/vuejs/rfcs/blob/master/active-rfcs/0013-composition-api.md)
- [VueUse - 实用的组合式函数库](https://vueuse.org/)

---

**标签**: #Vue3 #CompositionAPI #前端开发 #JavaScript
