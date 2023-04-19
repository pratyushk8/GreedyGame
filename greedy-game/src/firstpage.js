import axios from "axios";
const fetchData = () => {
    return axios.get("http://go-dev.greedygame.com/v3/dummy/report?startDate=YYYY-MM-DD&endDate=YYYY-MM-DD")
          .then((response) => setUser(response.data));
  }

  useEffect(() => {
    fetchData();
  },[])