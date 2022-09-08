import { useNavigate } from "react-router-dom";


export default function Goback() {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate("-1")} className="back ops-btn">
      <span className="sr-only">back</span>
    </button>
  );
}
