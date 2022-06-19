import { useState } from "react";

function App () {

  const [form, setForm] = useState({
    username: "",
    email: "",
    comment: "",
    country: "uk", //=> if you want default value
    gender: "other", //=> if you want default value
    agree: false,
  });

  const [error, setError] = useState({   //=> validation state (only for username field)
    username: "",  
  });

  const onChange = (e) => {
    const { value, name, type, checked } = e.target;
    setForm((state) => ({
      ...state,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if(form.username.length < 3){
      // error
    setError((state) => ({
        ...state,
        name: "Needs More Than 2 Characters",
      }))
    return;

    } else {
      setForm({
        username: "",
        email: "",
        comment: "",
        country: "", //=> no default value after submitting
        gender: "", //=> no default value after submitting
        agree: false,
      })
      setError((state) => ({
        ...state,
        name: "",
      }))
    }
      console.log(form)
  };



  return (
    <form
      className="shadow-lg p-3 col-9 mt-5 m-auto" onSubmit={(e) => submitHandler(e)}>
      <label>
        Username:
        <input value={form.username} onChange={onChange} name="username" />
      </label>
      {error.name && <div className="text-danger">{error.name}</div>}
      <hr />
      <label>
        Email:
        <input value={form.email} onChange={onChange} name="email" />
      </label>
      <hr />
      <label>
        Comment:
        <textarea value={form.comment} onChange={onChange} name="comment" />
      </label>
      <hr />
      <label>
        Country:
        <select onChange={onChange} name="country" value={form.country}>
          <option value="usa">USA</option>
          <option value="uk">UK</option>
          <option value="canada">Canada</option>
        </select>
      </label>
      <hr />
      <label>
        Gender
        <div>
      <input type="radio" name="gender" onChange={onChange} value="male" checked={form.gender === "male"} /> Male
      <input type="radio" name="gender" onChange={onChange} value="female" checked={form.gender === "female"}  /> Female
      <input type="radio" name="gender" onChange={onChange} value="other" checked={form.gender === "other"}  /> Other
        </div>
      </label>
      <hr />
      <label>
        Agree
        <input type="checkbox" onChange={onChange} name="agree" value={form.agree} />
      </label>
      <hr />
      <button>Submit</button>
    </form>
  );
}

export default App;
