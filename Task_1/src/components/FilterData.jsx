import { useEffect, useState } from "react";
import FetchData from "./FetchData.jsx";
function FilterData({ data }) {
  const [serchTerm, setSerchTerm] = useState("");
  const [filter, setFilter] = useState(data);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    // if (serchTerm.trim() === null) {
    //   setFilter(data);
    //   setIsSearching(false);
    //   return;
    // }
    let timeOutId = null;
    if (serchTerm) {
      setIsSearching(true);
      timeOutId = setTimeout(() => {
        console.log("serching....");

        const filtered = data.filter(
          (user) =>
            user.name.toLowerCase().includes(serchTerm.trim().toLowerCase()) ||
            user.website
              .toLowerCase()
              .includes(serchTerm.trim().toLowerCase()) ||
            user.phone
              .toLowerCase()
              .includes(serchTerm.trim().toLocaleLowerCase()) ||
            getCompanyName(user.company)
              .toLowerCase()
              .includes(serchTerm.trim().toLowerCase()) ||
            getFullAddress(user.address)
              .toLowerCase()
              .includes(serchTerm.trim().toLowerCase())
        );
        setFilter(filtered);
        setIsSearching(false);
      }, 1000);
    } else {
      setIsSearching(false);
      setFilter(data);
    }
    return () => clearTimeout(timeOutId);
  }, [serchTerm, data]);

  const getFullAddress = (address) =>
    `${address.street}, ${address.suite}, ${address.city}, ${address.zipcode}`;
  const getCompanyName = (company) =>
    `${company.name}, ${company.catchPhrase}, ${company.bs}`;

  return (
    <>
      <div className="input-container">
        <input
          className="input-wrap"
          type="text"
          value={serchTerm}
          placeholder="Filter for All..."
          onChange={(e) => {
            setSerchTerm(e.target.value);
          }}
        />
      </div>
      {isSearching ? (
        <p>Data is filtering....</p>
      ) : filter.length === 0 ? (
        <p>No data Found</p>
      ) : (
        <div className="table-conatiner">
          <table border={1} className="table-wrap">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Website</th>
                <th>Company</th>
              </tr>
            </thead>
            <tbody>
              {filter.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{getFullAddress(item.address)}</td>
                    <td>{item.phone}</td>
                    <td>{item.website}</td>
                    <td>{getCompanyName(item.company)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
export default FilterData;
