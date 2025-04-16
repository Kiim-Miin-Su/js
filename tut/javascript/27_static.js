class MathTool {
    static add(a, b) {
        return a + b;
    }
}

math_tool = new MathTool();
console.log(math_tool.add(1, 2)); // 3

console.log(MathTool.add(1, 2)); // 3