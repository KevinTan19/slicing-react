import { useEffect, useState } from "react";

function CopyrightRehat() {
  const [year, setYear] = useState(0);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  return <p>&copy; {year} Rehat</p>;
}

export default CopyrightRehat;
