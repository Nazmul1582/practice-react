// Life Cycle

// 1. Mounting Phase
// 2. Updating Phase
// 3. Unmounting Phase
// 4. Error handling

// 1. Mounting Phase has 4 methods below
    // => constructor
    // => static getDerivedStateFromProps(props, state)
    // => render()
    // => componentDidMount()

// 2. Updating Phase has 5 methods below

    // first: mounting ................
    // => constuctor()
    // => static getDerivedStateFromProps(props, state)
    // => render

    // second: updating ..................
    // => static getDerivedStateFromProps(props, state)
    // => render
    // => getSnapshotBeforUpdate()
    // => componentDidUpdate()