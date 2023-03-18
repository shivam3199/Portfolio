import React, { useState } from 'react'
import NavBar from './NavBar'
import FileUpload from './FileUpload';

function Content() {
    const [userinfo, setUserInfo] = useState({ languages: [] });

    const handleChange = (e) => {
        const { value, checked } = e.target;
        const { languages } = userinfo;

        console.log(`${value} is ${checked}`);

        if (checked) {
            setUserInfo({
                languages: [...languages, value],
            });
        } else {
            setUserInfo({
                languages: languages.filter((e) => e !== value),
            });
        }
    };
    var languagesList = ["Java", "NodeJS", "Python", "C++", "Angular"];

    return (
        <>
            <div><NavBar /></div>
            <div className="container-fluid">
                <h4 className="display-4 text-center mb-2">File Upload</h4>
                <div className="col">
                    <div className="container">
                        <h2>Choose your language </h2>
                        <form>
                            <div className="row">
                                <div className="select-lang col-md-6">
                                    <div className="form-check m-3 cent">
                                        {languagesList.map((value) => (
                                            <div>
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="languages"
                                                    value={value}
                                                    onChange={handleChange}
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="flexCheckDefault"
                                                    style={{ paddingRight: 30 + "px" }}
                                                >
                                                    {value}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <FileUpload selectedLanguages={userinfo} />
            </div>
        </>

    )
}

export default Content