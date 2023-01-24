// Start variables
let moves = Math.floor(Math.random() * 2)
let table = [0, 0, 0, 0, 0, 0, 0, 0, 0]
let wins = [0, 0]

// Define fisrt color in next move
if (moves % 2 == 0)
{
    document.getElementById('block_move').style.backgroundColor = 'blue'
}
else
{
    document.getElementById('block_move').style.backgroundColor = 'red'
}

// Reset the game
function reset(loser)
{
    moves = loser
    table = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    for (let i = 0; i < 9; i++)
    {
        document.getElementById(i).style.backgroundColor = 'bisque'
    }
}

// Select a block as clicked
function select(id)
{
    if (check_defined(id))
    {
        if (moves % 2 == 0)
        {
            document.getElementById(id).style.backgroundColor = 'blue'
            moves++
            document.getElementById('block_move').style.backgroundColor = 'red'
            table[id] = moves % 2 + 1
        }
        else
        {
            document.getElementById(id).style.backgroundColor = 'red'
            moves++
            document.getElementById('block_move').style.backgroundColor = 'blue'
            table[id] = moves % 2 + 1
        }

        if (moves >= 4)
        {
            check_win(table)
        }

    }
}

// Check if the block has already been defined
function check_defined(id)
{
    let color = 'bisque'
    color = document.getElementById(id).style.backgroundColor
    if (color == 'blue' || color == 'red')
    {
        return false
    }
    else
    {
        return true
    }
}

// Check if win or tie
function check_win(table)
{
    // Red win
    if (table[0] == table[1] && table[1] == table[2] && table[2] == 1 || table[3] == table[4] && table[4] == table[5] && table[5] == 1 || table[6] == table[7] && table[7] == table[8] && table[8] == 1 || table[0] == table[3] && table[3] == table[6] && table[6] == 1 || table[1] == table[4] && table[4] == table[7] && table[7] == 1 || table[2] == table[5] && table[5] == table[8] && table[8] == 1 || table[0] == table[4] && table[4] == table[8] && table[8] == 1 || table[2] == table[4] && table[4] == table[6] && table[6] == 1)
    {
        wins[1] += 1
        document.getElementById('red').innerHTML = `Red: ${wins[1]}`
        reset(0)
    }

    // Blue win
    else if (table[0] == table[1] && table[1] == table[2] && table[2] == 2 || table[3] == table[4] && table[4] == table[5] && table[5] == 2 || table[6] == table[7] && table[7] == table[8] && table[8] == 2 || table[0] == table[3] && table[3] == table[6] && table[6] == 2 || table[1] == table[4] && table[4] == table[7] && table[7] == 2 || table[2] == table[5] && table[5] == table[8] && table[8] == 2 || table[0] == table[4] && table[4] == table[8] && table[8] == 2 || table[2] == table[4] && table[4] == table[6] && table[6] == 2)
    {
        wins[0] += 1
        document.getElementById('blue').innerHTML = `Blue: ${wins[0]}`
        reset(1)
    }

    // Tie
    else if (table[0] != 0 && table[1] != 0 && table[2] != 0 && table[3] != 0 && table[4] != 0 && table[5] != 0 && table[6] != 0 && table[7] != 0 && table[8] != 0)
    {
        reset(Math.floor(Math.random() * 2))
    }
}