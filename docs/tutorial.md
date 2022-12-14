# Description

![image](https://user-images.githubusercontent.com/37502542/192399564-defe7c15-ffd3-4a4f-8c72-168aa9d0ff6e.png) ![image](https://user-images.githubusercontent.com/37502542/192433796-abaec297-a698-46f3-92aa-bd67391774ca.png) ![image](https://user-images.githubusercontent.com/37502542/192399595-4270e1f5-b826-4707-a42d-1e6fc5a495f3.png)

<br>

## Introduction
We have an extremely inquisitive and explorative agent who likes to visit numerous worlds and investigate them. The agent has a special door through which it can go around various universes. On one occasion, the very energized agent entered another world through the door and began its investigation in that world. He viewed the world as exceptionally tranquil and quiet and continued to ponder the different resources it could see in this world. Although the agent was able to locate some useful resources for its voyage with the aforementioned enthusiasm, it was unaware of the extreme proximity from the portal door. It was lost and was in an obscure place where it stopped getting any signals from the door. The agent recalls receiving the signal of the door as it passed by a rose bush. To gain the signal to the door, assist the agent in finding the rose bush.




## Agent's movement
![image](https://user-images.githubusercontent.com/37502542/192399622-e6a03692-880f-45b7-afa6-58608a9655e7.png) ![image](https://user-images.githubusercontent.com/37502542/192399636-8ec5ea4f-10e3-492a-8580-80651746d0b6.png)
<br>
The agent, when begun exploration took no gadgets, aside from its tracking device, that would assist it with teleporting to any area to locate the portal door. The agent has no map of the new world, yet it can see its one neighbor from the current position. To monitor its direction, the agent smartly flags every area it navigated so it will not fail to remember which sites it wandered. Moreover, in the event that the agent is impeded/couldn't find any unexplored neighbors at its vicinity, it has an ability to bounce up one level to the hub which has unexplored places as neighbors. It can likewise jump from one side of the ground to the next.

## Search strategy: DFS
The agent strategically began to find the roses from the current location. It believed that with care, it could ultimately track down the gateway. Since the agent sees it's one neighbor, it felt that it would continuously push one stride ahead until it can do as such. At the same time, it monitors the areas it visited so it will not need to check for the roses in that area again. During the hunt, if it can't go any further, it will then make one stride towards the left neighbor from that area until it is unblocked and will keep pushing ahead until it tracks down the portal. In the event that the specialist can't find any new positions in the area that it didn't investigate, it will utilize its ability to jump one step up so it can go to its last flagged position which has at least one unexplored neighbor.

## Search strategy: BFS
The agent made one more technique to track down the portal, where it believed that it would traverse the area comprehensively. It thought, consider the possibility that it could make the progress more broadly i.e., the agent would navigate every one of the neighbors of the current site prior to going to the new site. It will all the while flag every one of the respective visited locations to monitor the path it navigated. Since the agent could hop, it will utilize that power to leap to another location after visiting every one of the neighbors of the ongoing hub. In this manner the agent can look through it more comprehensively. The agent understood that this procedure is smarter to track down the most limited distance.

## Searching strategy: A*
Up to this point, the agent has not been able to utilize its tracking gadget. The gadget couldn???t track the signals of the door, so the specialist was aimlessly following the neighbors. Imagine a scenario where after some crossing in the field, the agent can receive the signals from the door. Then intuitively the agent would want to move towards the signals. Thus, for this situation the agent will navigate to the location from which the most elevated signal is received and flag it accordingly. It will continue to move towards the most elevated signal until it arrives at the portal door. If the specialist gets obstructed where the encompassing neighbors are all visited, it will utilize its ability to leap to the node which has somewhere around one unexplored node. Here, we could say that the specialist is involving the signal strength as a heuristic to track down the portal door.
