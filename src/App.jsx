import React, { useState } from "react";
import "../src/components/FileInput.css";
import FileInput from "../src/components/FileInput";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import "./App.css";

function App() {
    const onFileChange = (files) => {
        console.log(files);
    };
    const [open, setOpen] = useState(false);

    const handleClickToOpen = () => {
        setOpen(true);
    };

    const handleToClose = () => {
        setOpen(false);
    };

    const handleToSave = () => {
        setOpen(false);
    };
    const [count, setCount] = useState(0);

    return (
        <>
            <h1>File Drag and Drop Input</h1>
            <div className="card">
                <button type="button" onClick={handleClickToOpen}>
                    Upload
                </button>
            </div>

            <Dialog open={open} onClose={handleToClose}>
                <DialogContent>
                    <DialogContentText>
                        <div className="box">
                            <h2 className="header">
                                Browse or drop your images and videos
                            </h2>
                            <FileInput
                                onFileChange={(files) => onFileChange(files)}
                            />
                        </div>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleToClose} color="primary" autoFocus>
                        Close
                    </Button>
                    <Button onClick={handleToSave} color="primary" autoFocus>
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default App;
