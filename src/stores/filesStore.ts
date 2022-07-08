import create from "zustand";
import { immer } from "zustand/middleware/immer";
import type File from "../typings/Files";
import Files from "../components/files.json";

type UseFilesStore = {
  files: File[];
  selectedFile: number;
  setSelectedFile: (selectedFile: number) => void;
};

const useFilesStore = create<UseFilesStore, [["zustand/immer", never]]>(
  immer((set, get) => ({
    files: Files,
    selectedFile: 0,
    setSelectedFile: (selected) => {
      if (selected < 0 || selected >= get().files.length) return;

      set((state) => {
        state.selectedFile = selected;
      });
    },
  }))
);

export default useFilesStore;
