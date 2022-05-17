import "./DisplayContacts.css";

const DisplayContacts = ({ newContact, onClick, searchText }: any) => (
  <div className="list-container">
    {newContact
      .filter((person: any) => person.name.includes(searchText))
      .map((person: any, index: number) => (
        <div key={index} className="list">
          <ul>
            <li>
              <span>Name :</span> {person.name}
            </li>
            <li>
              <span>Phone :</span> {person.phone}
            </li>
            <li>
              <span>Email :</span> {person.email}
            </li>
          </ul>
          <button onClick={() => onClick(index)}>DEL</button>
        </div>
      ))}
  </div>
);

export default DisplayContacts;
