/*

    Table: Activity

        +--------------+---------+
        | Column Name  | Type    |
        +--------------+---------+
        | player_id    | int     |
        | device_id    | int     |
        | event_date   | date    |
        | games_played | int     |
        +--------------+---------+

        (player_id, event_date) is the primary key of this table.
        This table shows the activity of players of some games.
        Each row is a record of a player who logged in and played a number of games (possibly 0) before logging out on someday using some device.


    Write an SQL query to report the device that is first logged in for each player.

    Return the result table in any order.

    The query result format is in the following example.


    Example 1:

        Input:

            Activity table:
                +-----------+-----------+------------+--------------+
                | player_id | device_id | event_date | games_played |
                +-----------+-----------+------------+--------------+
                | 1         | 2         | 2016-03-01 | 5            |
                | 1         | 2         | 2016-05-02 | 6            |
                | 2         | 3         | 2017-06-25 | 1            |
                | 3         | 1         | 2016-03-02 | 0            |
                | 3         | 4         | 2018-07-03 | 5            |
                +-----------+-----------+------------+--------------+

            Output: 
                +-----------+-----------+
                | player_id | device_id |
                +-----------+-----------+
                | 1         | 2         |
                | 2         | 3         |
                | 3         | 1         |
                +-----------+-----------+

    LeetCode (2023) game_play_analysis_II: https://leetcode.com/problems/game-play-analysis-ii/description/

*/

-- creating Activity
CREATE TABLE Activity (
    player_id INTEGER NOT NULL,
    device_id INTEGER NOT NULL,
    event_date DATE NOT NULL,
    games_played INTEGER NOT NULL,
    PRIMARY KEY (player_id, event_date)
);

-- inserting data into Activity
INSERT INTO Activity (player_id, device_id, event_date, games_played) VALUES
    (1, 2, '2016-03-01', 5),
    (1, 2, '2016-05-02', 6),
    (2, 3, '2017-06-25', 1),
    (3, 1, '2016-03-02', 0),
    (3, 4, '2018-07-03', 5);


SELECT 
    player_id, 
    device_id
FROM Activity
WHERE 
    (player_id, event_date) 
    IN 
    (
        SELECT
            player_id,
            MIN(event_date)
        FROM
            Activity
        GROUP BY player_id
    );  /*
            1|2
            2|3
            3|1
        */