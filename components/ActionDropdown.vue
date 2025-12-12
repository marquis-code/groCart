<template>
  <div class="relative" ref="dropdownRef">
    <button
      @click="isOpen = !isOpen"
      class="p-2 hover:bg-gray-100 rounded-lg transition-colors"
    >
      <IconDotsVertical :size="20" class="text-gray-600" />
    </button>

    <div
      v-if="isOpen"
      class="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50"
    >
      <button
        v-for="(action, index) in actions"
        :key="index"
        @click="handleAction(action.label)"
        class="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors"
      >
        <component :is="action.icon" :size="16" :class="action.color" />
        <span :class="['text-sm', action.color]">{{ action.label }}</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { 
  IconEye, 
  IconEdit, 
  IconLock, 
  IconTrash,
  IconDotsVertical 
} from '@tabler/icons-vue';

interface Props {
  userId: string;
}

const props = defineProps<Props>();

const isOpen = ref(false);
const dropdownRef = ref<HTMLElement | null>(null);

const actions = [
  { label: 'View Details', icon: IconEye, color: 'text-gray-700' },
  { label: 'Edit User', icon: IconEdit, color: 'text-blue-600' },
  { label: 'Block User', icon: IconLock, color: 'text-orange-600' },
  { label: 'Delete User', icon: IconTrash, color: 'text-red-600' },
];

const handleAction = (actionLabel: string) => {
  console.log(`${actionLabel} clicked for user ${props.userId}`);
  isOpen.value = false;
};

const handleClickOutside = (event: MouseEvent) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
    isOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener('mousedown', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('mousedown', handleClickOutside);
});
</script>
