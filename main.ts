namespace Xducate {

    //% block
    export function createPlayground() {
        player.teleport(positions.createWorld(0, 4, 0))
        loops.pause(1500)
        builder.teleportTo(pos(0, 0, -5))
        builder.mark()
        for (let j = 0; j <= 3; j++) {
            builder.move(FORWARD, 14)
            builder.turn(LEFT_TURN)
        }
        builder.tracePath(STONE)

        // Place agent at start of world
        resetAgent()

        //Reset and Place rose_bush
        resetRoses()
    }
    
    //% block
    export function resetAgent() {
        let p = positions.createWorld(-1, 4, -6)
        agent.teleport(p, FORWARD)
    }
    
    //% block
    export function resetRoses() {
        let edges = [positions.createWorld(-2, 4, -7), positions.createWorld(-13, 4, -18)]
        blocks.fill(AIR, edges[0], edges[1])
        rosePosition = positions.random(edges[0], edges[1])
        blocks.place(ROSE_BUSH, rosePosition)
    }

    
    function findRoses() {
        if (agent.inspect(AgentInspection.Block, FORWARD) == 175) dance()
        return agent.inspect(AgentInspection.Block, FORWARD) == 175
    }

    // DFS
    //% block
    export function strategy1() {
        visited = []
        let stack: Position[] = []
        stack = [agent.getPosition()]

        while (stack.length > 0) {

            cur = stack.pop()
            if (visited.indexOf(cur.toString()) != -1) {
                continue
            }

            agent.teleport(cur, FORWARD)
            visited.push(cur.toString())

            for (let i = 0; i <= 3; i++) {
                if (agent.inspect(AgentInspection.Block, dir[i]) == 0 && visited.indexOf(cur.move(next[i], 1).toString()) == -1) {
                    stack.push(cur.move(next[i], 1))
                }
            }
            if (findRoses()) break
        }
    }

    // BFS
    //% block
    export function strategy2() {
        visited = []
        let queue: Array<Position> = []
        queue = [agent.getPosition()]

        while (queue.length > 0) {

            cur = queue.shift()
            if (visited.indexOf(cur.toString()) != -1) {
                continue
            }

            agent.teleport(cur, FORWARD)
            visited.push(cur.toString())

            for (let i = 0; i <= 3; i++) {
                if (agent.inspect(AgentInspection.Block, dir[i]) == 0 && visited.indexOf(cur.move(next[i], 1).toString()) == -1) {
                    queue.push(cur.move(next[i], 1))
                }
            }
            if (findRoses()) break
        }
    }

    // Blocks doesn't recognise this. Js works
    // type Heuristic = (p1: Position, p2: Position) => number

    // A-star
    //% block 
    export function strategy3(heuristic: number) {

        type Node = {
            x: Position,
            dis: number
        }

        visited = []
        let queue: Array<Node> = []
        queue.push({ x: agent.getPosition(), dis: 0 })

        while (queue.length > 0) {

            queue = queue.sort((x, y) => y.dis - x.dis)
            let cur = queue.pop().x
            if (visited.indexOf(cur.toString()) != -1) {
                continue
            }

            agent.teleport(cur, FORWARD)
            visited.push(cur.toString())

            for (let i = 0; i <= 3; i++) {
                if (agent.inspect(AgentInspection.Block, dir[i]) == 0 && visited.indexOf(cur.move(next[i], 1).toString()) == -1) {
                    let h = heuristic == 1 ? manhattanDistance : euclideanDistance 
                    queue.push({ x: cur.move(next[i], 1), dis: h(cur.move(next[i], 1), rosePosition) })
                }
            }
            if (findRoses()) break
        }
    }

    
    function manhattanDistance(p1: Position, p2: Position) {
        return Math.abs(Math.abs(p2.getValue(Axis.X)) - Math.abs(p1.getValue(Axis.X))) + Math.abs(Math.abs(p2.getValue(Axis.Z)) - Math.abs(p1.getValue(Axis.Z)))
    }

    function euclideanDistance(p1: Position, p2: Position) {
        return Math.sqrt(Math.pow(Math.abs(p2.getValue(Axis.X)) - Math.abs(p1.getValue(Axis.X)), 2) + Math.pow(Math.abs(Math.abs(p2.getValue(Axis.Z)) - Math.abs(p1.getValue(Axis.Z))), 2))
    }


    // From AI module of courses
    function dance() {
        for (let i = 0; i < 4; i++) {
            agent.move(LEFT, 1)
            agent.attack(FORWARD)
            agent.move(RIGHT, 1)
            agent.move(RIGHT, 1)
            agent.move(LEFT, 1)
        }
    }


    let visited: Array<string> = []
    let cur: Position = null
    let next: number[] = [
        CardinalDirection.West,
        CardinalDirection.East,
        CardinalDirection.South,
        CardinalDirection.North
    ]

    let dir: number[] = [
        LEFT,
        RIGHT,
        BACK,
        FORWARD
    ]
    
    let rosePosition: Position = null

    /**
     * Tests
     * player.onChat("strategy1", strategy1)
     * player.onChat("strategy2", strategy2)
     * player.onChat("strategy3", strategy3)
     * player.onChat("arena", createPlayground)
     */
}
