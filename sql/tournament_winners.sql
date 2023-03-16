/**

    Table: Players
        +-------------+-------+
        | Column Name | Type  |
        +-------------+-------+
        | player_id   | int   |
        | group_id    | int   |
        +-------------+-------+

        player_id is the primary key of this table.
        Each row of this table indicates the group of each player.


    Table: Matches
        +---------------+---------+
        | Column Name   | Type    |
        +---------------+---------+
        | match_id      | int     |
        | first_player  | int     |
        | second_player | int     | 
        | first_score   | int     |
        | second_score  | int     |
        +---------------+---------+
        match_id is the primary key of this table.
        Each row is a record of a match, first_player and second_player contain the player_id of each match.
        first_score and second_score contain the number of points of the first_player and second_player respectively.
        You may assume that, in each match, players belong to the same group.


    The winner in each group is the player who scored the maximum total points within the group. In the case of a tie, the lowest player_id wins.
    Write an SQL query to find the winner in each group.
    Return the result table in any order.
    The query result format is in the following example.


    Example 1:

        Input: 
            Players table:
            +-----------+------------+
            | player_id | group_id   |
            +-----------+------------+
            | 15        | 1          |
            | 25        | 1          |
            | 30        | 1          |
            | 45        | 1          |
            | 10        | 2          |
            | 35        | 2          |
            | 50        | 2          |
            | 20        | 3          |
            | 40        | 3          |
            +-----------+------------+

            Matches table:
            +------------+--------------+---------------+-------------+--------------+
            | match_id   | first_player | second_player | first_score | second_score |
            +------------+--------------+---------------+-------------+--------------+
            | 1          | 15           | 45            | 3           | 0            |
            | 2          | 30           | 25            | 1           | 2            |
            | 3          | 30           | 15            | 2           | 0            |
            | 4          | 40           | 20            | 5           | 2            |
            | 5          | 35           | 50            | 1           | 1            |
            +------------+--------------+---------------+-------------+--------------+

            Output: 
            +-----------+------------+
            | group_id  | player_id  |
            +-----------+------------+ 
            | 1         | 15         |
            | 2         | 35         |
            | 3         | 40         |
            +-----------+------------+


    Leetcode (2023) Tournament Winners: https://leetcode.com/problems/tournament-winners/

*/

-- create table Players
CREATE TABLE IF NOT EXISTS Players (
    player_id INT NOT NULL,
    group_id INT NOT NULL,
    PRIMARY KEY (player_id)
);

-- create table Matches
CREATE TABLE IF NOT EXISTS Matches (
    match_id INT NOT NULL,
    first_player INT NOT NULL,
    second_player INT NOT NULL,
    first_score INT NOT NULL,
    second_score INT NOT NULL,
    PRIMARY KEY (match_id)
);

-- insert data into Players
INSERT INTO Players (player_id, group_id) VALUES
    (15, 1),
    (25, 1),
    (30, 1),
    (45, 1),
    (10, 2),
    (35, 2),
    (50, 2),
    (20, 3),
    (40, 3);

-- insert data into Matches
INSERT INTO Matches (match_id, first_player, second_player, first_score, second_score) VALUES
    (1, 15, 45, 3, 0),
    (2, 30, 25, 1, 2),
    (3, 30, 15, 2, 0),
    (4, 40, 20, 5, 2),
    (5, 35, 50, 1, 1);


SELECT 
    group_id,
    player_id
FROM (
    SELECT
        Players.group_id,
        Players.player_id,
        RANK() OVER (
            PARTITION BY
                Players.group_id
            ORDER BY
                SUM(
                    CASE WHEN
                        Players.player_id = Matches.first_player
                        THEN Matches.first_score
                        ELSE Matches.second_score
                        END
                ) DESC,
            Players.player_id ASC
        ) player_rank
    FROM
        Players
        JOIN Matches ON
            Players.player_id IN (
                Matches.first_player,
                Matches.second_player
            ) 
        GROUP BY
            Players.group_id,
            Players.player_id
) target 
WHERE 
    player_rank = 1; /*
                        1|15
                        2|35
                        3|40
                     */

