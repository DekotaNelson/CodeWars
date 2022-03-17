// There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

// number of pillars (≥ 1);
// distance between pillars (10 - 30 meters);
// width of the pillar (10 - 50 centimeters).

// Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).

function pillars(numPill, dist, width) {
    // Total distance between = (dist * (numPill - 1))
    // Total widths = (width * (numPill - 2))
    return numPill > 1 ? ((dist * 100) * (numPill - 1)) + (width * (numPill - 2)) : 0
  }