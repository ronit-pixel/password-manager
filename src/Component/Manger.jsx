import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { v4 as uuidv4 } from 'uuid';

const Manger = () => {
  const ref = useRef();
  const passwordRef = useRef();

  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setpasswordArray] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("passwords")) {
      setpasswordArray(JSON.parse(localStorage.getItem("passwords")));
    } else {
      setpasswordArray([]);
    }
  }, []);

  const show = () => {
    // console.log(ref.current.src);
    passwordRef.current.type="text"
    if (ref.current.src.includes("public/hide.png")) {
      ref.current.src = "public/open-eye.png";
      passwordRef.current.type="text";
    } else {
      ref.current.src = "public/hide.png";
      passwordRef.current.type="password";
    }
  };

  const savepassword = () => {
    console.log(form);
    setpasswordArray([...passwordArray, {...form, id:uuidv4()}]);
    localStorage.setItem("passwords", JSON.stringify([...passwordArray, {...form, id:uuidv4()}]));
    console.log([...passwordArray, form]);
  };
  const remove= (id) => {
    console.log("Deleted the password ",id);
    const c= confirm("Do you really want to Delete??")
    if(c){
      setpasswordArray(passwordArray.filter(item=>item.id!==id));
      localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item=>item.id!==id)));
    
    }    
  };
  const HandleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div class="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        <div class="absotue left-0 rigth-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full "></div>
      </div>
    
      <div className="container py-5 md:mycontainer text-center">
        <h1 className="pb-4 uppercase text-2xl font-bold">
          Your own password manager
        </h1>
                              
        <div className="text-black flex flex-col items-center ">
          <input
            className="rounded-full  w-9/12 px-4 py-1 font-mono"
            type="text"
            name="site"
            id="site"
            placeholder="Enter Web-Site URL"
            value={form.site}
            onChange={HandleChange}
          />

          <div className=" w-full flex justify-center gap-3 pt-6 pb-6 ">
            <input
              className="rounded-full w-5/12 px-4 py-1 font-mono "
              type="text"
              name="username"
              id="username"
              placeholder="Enter Username"
              value={form.username}
              onChange={HandleChange}
            />
            <input
              className="rounded-full  w-4/12 px-4 py-1 font-mono z-8"
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
              value={form.password}
              onChange={HandleChange}
              ref={passwordRef}
            />
            <div className="relative">
              <span
                className="absolute right-[3px] top-[4px] z-10 cursor-pointer"
                onClick={show}
              >
                <img
                  ref={ref}
                  src="public\open-eye.png"
                  alt="eye"
                  className="p-1"
                  width={26}
                />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
              </span>
            </div>
          </div>

          <div
            onClick={savepassword}
            className="flex items-center justify-center bg-red-700 rounded-full px-4 py-2 gap-3 w-fit hover:bg-red-300 border-2 border-red-500"
          >
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
            ></lord-icon>
            <button className="font-bold">Save Passsword</button>
          </div>
        </div>
        <div className="mt-4">
          <h2 className="text-3xl font-semibold text-left">Your Password</h2>
          {passwordArray.length === 0 && <div>No Password to show</div>}
          {passwordArray.length != 0 && (
            <table className="table-auto w-full mt-3 rounded-sm overflow-hidden">
              <thead className="bg-red-400 ">
                <tr>
                  <th className="py-2 ">Web-site</th>
                  <th className="py-2 ">Username</th>
                  <th className="py-2 ">Password</th>
                  <th className="py-2 ">Delete</th>
                </tr>
              </thead>
              <tbody className="bg-red-100">
                  {passwordArray.map((item)=>{
                     return <tr>
                     <td className="text-center w-32  py-1"><a href={item.site} target="_blank">{item.site}</a></td>
                      <td className="text-center w-32 py-1">{item.username}</td>
                      <td className="text-center w-32 py-1">{item.password}</td>
                      <td className="text-center w-8 py-1 cursor-pointer hover:scale-125"><i onClick={()=>{remove(item.id)}}class="ri-delete-bin-fill"></i></td>

                      </tr>
                  })}                                
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default Manger;
