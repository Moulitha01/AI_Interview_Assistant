def calculate_next_difficulty(current_difficulty: int, correct: bool, response_time: float):
    """
    Basic Adaptive Logic:
    - If correct and fast → increase difficulty
    - If incorrect → decrease difficulty
    - Otherwise → keep same
    """

    if correct and response_time < 20:
        return min(current_difficulty + 1, 3)

    if not correct:
        return max(current_difficulty - 1, 1)

    return current_difficulty