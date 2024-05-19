import create from 'zustand';

export const useStore = create((set) => ({
    data: [],
    data2: [],
    data3:[],
    data4:[],
    setData: (newData) => set((state) => ({ data: newData })),
    setData2: (newData2) => set((state) => ({ data2: newData2 })),
    setData3: (newData3) => set((state) => ({ data3: newData3 })),
    setData4: (newData4) => set((state) => ({ data4: newData4 })),
  }));