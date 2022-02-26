export const transformingDate = (timestamp: number) => {
  const currentDate = new Date();
  const date = new Date(timestamp * 1000);
  const year = date.getFullYear();
  const day = date.getDay();
  return `${day}`;
};

export const clipboardCopy = (text: string, url: string): void => {
  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert(`${url} 주소가 복사되었습니다.`);
      })
      .catch(() => {
        alert("복사를 다시 시도해주세요.");
      });
  } else {
    if (!document.queryCommandSupported("copy")) {
      return alert("복사하기가 지원되지 않는 브라우저입니다.");
    }

    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert(`${url} 주소가 복사되었습니다.`);
  }
};

export const getFileSize = (byte: number) => {
  const kb = (byte / 1024).toFixed(2);
  const mb = (Number(kb) / 1024).toFixed(2);
  const gb = (Number(mb) / 1024).toFixed(2);
  const tb = (Number(gb) / 1024).toFixed(2);
  if (Number(tb) >= 1) return `${tb}TB`;
  if (Number(gb) >= 1) return `${gb}GB`;
  if (Number(mb) >= 1) return `${mb}MB`;
  if (Number(kb) >= 1) return `${kb}KB`;
  return `${byte}B`;
};
