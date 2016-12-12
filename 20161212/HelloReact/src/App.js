/**
 * Created by plter on 2016/12/12.
 */

import React from "react";

class App extends React.Component {

    render() {
        return <div>
            {this.props.children}
        </div>;
    }
}

export default App;