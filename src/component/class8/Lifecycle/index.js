//                  Life cycle
// ===========================================

// 1. Mounting Phase
// 2. Updating Phase
// 3. Unmounting Phase
// 4. Error handling

// 1. Mounting Phase =====================
    // # constructor()
    // # static getDerivedStateFromProps(props, state)
    // # render()
    // # componentDidMount()

// 2. Updating Phase ==========================

    // # static getDerivedStateFromProps(props, state)
    // # shouldComponentUpdate()
    // # render()
    // # getSnapshotBeforUpdate()
    // # componentDidUpdate()


// 3. Unmounting ===========================
    // # render() (not need)
    // # componentWillUnmount()


// 4. Error Handling or Error Boundary ======================
    // # static getDerivedStateFromError(props, state)
    // # componentDidCatch(err, info)