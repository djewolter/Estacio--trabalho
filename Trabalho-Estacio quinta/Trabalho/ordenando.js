// Função para trocar os valores de duas posições de um vetor
const swap = (arr, pos1, pos2) => {
    [arr[pos1], arr[pos2]] = [arr[pos2], arr[pos1]];
  };
  
  // Função para embaralhar os elementos de um vetor
  const shuffle = (arr, numSwaps) => {
    for (let i = 0; i < numSwaps; i++) {
      const pos1 = Math.floor(Math.random() * arr.length);
      const pos2 = Math.floor(Math.random() * arr.length);
      swap(arr, pos1, pos2);
    }
  };
  
  // Função para ordenar um vetor com o algoritmo Bubble Sort
  const bubble_sort = (arr) => {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          swap(arr, j, j + 1);
        }
      }
    }
  };
  
  // Função para ordenar um vetor com o algoritmo Selection Sort
  const selection_sort = (arr) => {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        swap(arr, i, minIndex);
      }
    }
  };
  
  // Função para ordenar um vetor com o algoritmo Quick Sort
  const quick_sort = (arr, low, high) => {
    if (low < high) {
      const pivotIndex = partition(arr, low, high);
      quick_sort(arr, low, pivotIndex - 1);
      quick_sort(arr, pivotIndex + 1, high);
    }
  };
  
  // Função de particionamento (apoio ao Quick Sort)
  const partition = (arr, low, high) => {
    const pivot = arr[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
      if (arr[j] < pivot) {
        i++;
        swap(arr, i, j);
      }
    }
    swap(arr, i + 1, high);
    return i + 1;
  };