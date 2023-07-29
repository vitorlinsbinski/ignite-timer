import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";
import { useContext } from "react";
import { CyclesContext } from "../../../../contexts/CyclesContext";
import { useFormContext } from "react-hook-form";

export function NewCycleForm() {
  const { activeCycle, cycles } = useContext(CyclesContext);
  const { register } = useFormContext();

  const uniqueTasks = new Set();
  const cyclesTaskNotRepeated = cycles.filter((cycle) => {
    if (!uniqueTasks.has(cycle.task)) {
      // Se a tarefa ainda não estiver no conjunto, adicione-a ao conjunto e retorne true para mantê-la no array filtrado
      uniqueTasks.add(cycle.task);
      return true;
    }
    // Se a tarefa já estiver no conjunto, retorne false para filtrá-la do array
    return false;
  });
  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        type="text"
        id="task"
        placeholder="Dê um nome para o seu projeto"
        list="task-suggestions"
        disabled={!!activeCycle}
        {...register("task")}
      />

      <datalist id="task-suggestions">
        {cyclesTaskNotRepeated.map((cycle) => {
          return <option key={cycle.id} value={cycle.task}></option>;
        })}
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        step={5}
        min={5}
        max={60}
        {...register("minutesAmount", { valueAsNumber: true })}
        disabled={!!activeCycle}
      />

      <span>minutos.</span>
    </FormContainer>
  );
}
