import { Plus, X } from "phosphor-react";
import logoImg from "../assets/logo.svg";
import * as Dialog from "@radix-ui/react-dialog";

export function Header() {
  return (
    <div className="w-full max-w-3xl mx-auto flex items-center justify-between">
      <img src={logoImg} alt="Habit Tracker" />

      <Dialog.Root>
        <Dialog.Trigger
          onClick={buttonClicked}
          className="border border-violet-500 font-semibold rounded-lg px-6 py-4 flex items-center gap-3 hover:border-violet-300"
          type="button"
        >
          <Plus size={20} className="text-violet-500" />
          Adicionar hábito
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/80 w-screen h-screen" />
          <Dialog.Content
            className="absolute p-10 bg-zinc-900 rounded-2xl w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <Dialog.Close className="absolute top-6 right-6 text-zinc-400 hover:text-zinc-200">
              <X size={24} arial-label='Fechar' />
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}

//parei em 56:00