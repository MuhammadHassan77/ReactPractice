const set_data = (data) => {
    // console.log("chal");
    return (dispatch) => {
        dispatch({ type: "SETDATA", data: data })
    }
}

export {
    set_data
}