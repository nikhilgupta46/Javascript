const maxArea = (height = []) => {
  let i = 0;
  let j = height.length - 1;
  let area = -1;
  while (i < j) {
    const height1 = height[i];
    const height2 = height[j];

    const breadth = j - i;
    const localArea = Math.min(height1, height2) * breadth;
    if (localArea > area) {
      area = localArea;
    }
    if (height1 === height2) {
      i++;
      j--;
    } else if (height1 < height2) {
      i++;
    } else {
      j--;
    }
  }
  return area;
};

// Input:
const height = [5, 8, 6, 2, 5, 4, 8, 3, 5, 7];
console.log(maxArea(height));
// Output: 49

// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

// Example 2:
// Input:
const height2 = [1, 1];
//Output: 1;
