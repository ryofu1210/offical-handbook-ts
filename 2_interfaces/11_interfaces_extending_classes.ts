class Control {
  private state: any;
}

interface SelectableControl extends Control {
  select(): void;
}

class Button extends Control implements SelectableControl {
  select() {}
}

class TextBox extends Control {
  select() {}
}

// Since state is a private member it is only possible for descendants of Control to implement SelectableControl.
class ImageControl implements SelectableControl {
  private state: any;
  select() {}
}

// private propertiesは、継承でしか実装できない。下ならいける
// class ImageControl extends Control implements SelectableControl {
//   select() {}
// }
