<script setup lang="ts">
import FullSetup from "./components/full.setup";
import SetupComponentTypeDecl from "./components/setup-components/type-decl";

function changeName(value: string) {
  console.log(value);
}
</script>

<template>
  <div></div>
  <SetupComponentTypeDecl name="string" @changeName="changeName" />
  <FullSetup model-value="modelValue" title="title" />
</template>
