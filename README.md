# vue-macro-setupfc

基于 sxzz 的 vue-macros 库，对于 vue3 setup 函数进行 tsx 化的可能性进行研究，主要基于 SetupFC 这个泛型类型/编译宏进行研究：

- vue-macro 主要的功能都是基于 AST 预处理得到的结果进行处理，如对于使用 SetupFC 的单文件进行展开，前面添加 `<script setup lang="tsx">`，将函数返回的 html 套进 `defineRender` 宏，从而利用已经实现的 jsx-directive 特性

得到结果：缺陷？（目前的约束）

- 在使用 SetupFC 的单文件中无法定义 TS 类型，需要在另外文件定义在导入
- SetupFC 具有三个泛型变量（P、E、S）对应 props、emit、slots，函数形参可以正常推导但是无法使用，需要自己在函数体内调用 `defineProps` 等宏
- App.vue 应该无法改成 App.tsx，研究的过程报错，考虑是 createApp 函数不支持 JSX.Element 类型的，所以还是需要 .vue。
- 通过 `EmitsToProps` 工具类型（出自 @vue-runtime-core）实现了对两种事件调用（onXxx 和 @xxx）的支持，原理是作为子组件，JSX中作为 props 从 P 得到推导，vue 模板中作为 v-on 指令从 E 得到推导。
- 没有研究 slots 如何使用（想完全做到 vue+tsx 的朋友可以研究一下）
