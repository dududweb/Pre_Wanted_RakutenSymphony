import { useState, useEffect } from "react";
import axios from "axios";
import { FileListRoot } from "types/fileList";

const useAxios = (url: string) => {
  const [data, setData] = useState<FileListRoot>([]);

  useEffect(() => {
    fetchData(url);
  }, [url]);

  const fetchData = async (url: string) => {
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error: any) {
      console.log(error);
    }
  };

  return { data };
};

export default useAxios;
