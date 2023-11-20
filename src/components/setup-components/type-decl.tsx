import { watch } from "vue";
import type { IEmits, IProps, ISlots } from "./type";
import type { JsxProps } from "../../types";

const SetupComponentTypeDecl: SetupFC<
  JsxProps<IProps, IEmits>,
  IEmits
> = () => {
  const { name } = $defineProps<IProps>();
  const emit = defineEmits(["changeName"]);

  let count = $ref(0);
  const double = $computed(() => count * 2);

  watch($$(count), (newVal) => {
    console.log(newVal);
    emit("changeName", "newVal");
  });

  return () => (
    <fieldset>
      {Array.from({ length: 5 }, () => (
        <legend>Type Declaration</legend>
      ))}
      <button
        onClick={() => {
          count++;
        }}
      >
        inc
      </button>
      <div>count: {count}</div>
      <div>double: {double}</div>
      {name}
    </fieldset>
  );
};

export default SetupComponentTypeDecl;
