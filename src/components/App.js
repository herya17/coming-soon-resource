import React from "react";
import Content from "./templates/Content";
import data from "../data/data";
import KEY_STORAGE from "../data/endpoint";

const { titleContent, bodyContent, lastContent } = data;

class App extends React.Component {
    constructor(props) {
        super(props);

        // this.isStorageExist = this.isStorageExist.bind(this);
        this.onLikeHandler = this.onLikeHandler.bind(this);
        // this.getData = this.getData.bind(this);

        this.state = {
            like: false
        }
    }

    // isStorageExist() {
    //     if (typeof Storage !== undefined) {
    //         return true;
    //     } else {
    //         window.alert("Your browser is not support web storage");
    //         return false;
    //     }
    // }

    // getData() {         
    //     if (localStorage.getItem(KEY_STORAGE)) {
    //         console.log(localStorage.getItem(KEY_STORAGE));
    //         return true;
    //     } else {
    //         localStorage.setItem(KEY_STORAGE, false);
    //         return false;
    //     }
    // }

    onLikeHandler() {
        const isLike = !this.state.like;
        this.setState({ like: isLike });
        // localStorage.setItem(KEY_STORAGE, isLike);
    }

    render() {
        return (
            <>
                <Content 
                    titleContent={titleContent}
                    bodyContent={bodyContent}
                    lastContent={lastContent}
                    onLikeCondition={this.state.like}
                    onLike={this.onLikeHandler} />
            </>
        );
    }
}

export default App;
