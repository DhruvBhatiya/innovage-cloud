import React, { useState } from "react";

const HookObject = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <form>
        <input
          type="text"
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
          placeholder="firstName"
        />
        <input
          type="text"
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
          placeholder="lastName"
        />
      </form>

      <p>
        {name.firstName}{" "}
        {name.lastName}
      </p>
      {JSON.stringify(name)}
    </div>
  );
};

export default HookObject;
