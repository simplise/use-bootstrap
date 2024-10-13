<template>
 <editor-content
  :editor="editor"
  :class="{ ...classObject }"
 />
</template>

<script  setup  lang="ts">
// BubbleMenu 開発失敗 2024/8/10
import { useEditor, EditorContent, type JSONContent } from '@tiptap/vue-3';
import TiptapStarterKit from '@tiptap/starter-kit';
import { useStateComponent, StateComponentProps } from '../../../composables/view-state/useState/useStateComponent';
import { defineModel, unref, computed, watch, type PropType } from '#imports';
//
interface ICommand {
 name: string;
}
//
const model = defineModel<JSONContent[]>();
const props = defineProps({
 ...StateComponentProps,
 command: { // 変化させてコマンドを実行します
  type: Object as PropType<ICommand>,
 },
});
//
const content = computed(() => {
 return {
  type: 'doc',
  content: unref(model),
 };
});
//
const { updateValue, classObject } = useStateComponent(props, model);
//
const editor = useEditor({
 extensions: [
  TiptapStarterKit,
 ],
 content: unref(content),
 onUpdate({ editor }) {
  model.value = editor.getJSON().content || [];
  updateValue(model.value);
 },
 onCreate({ editor }) {
  // カーソルをテキストの末尾に配置
  const endPos = editor.state.doc.content.size;
  editor.commands.setTextSelection(endPos);
 },
});
//
const toggleBold = () => {
 editor.value?.chain().focus().toggleBold().run();
};
const toggleItalic = () => {
 editor.value?.chain().focus().toggleItalic().run();
};
//
watch(() => props.command, (newCommand) => {
 switch (newCommand?.name) {
  case 'toggleBold':
   toggleBold();
   break;
  case 'toggleItalic':
   toggleItalic();
   break;
 }
});
</script>
