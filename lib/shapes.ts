export interface Shape {
    color: string;
    clone(): Shape;
    render(): JSX.Element;
  }
  
  export class Circle implements Shape {
    constructor(public color: string, public radius: number) {}
  
    clone(): Shape {
      return new Circle(this.color, this.radius);
    }
  
    render(): JSX.Element {
      return (
        <div
          style={{
            width: `${this.radius * 2}px`,
            height: `${this.radius * 2}px`,
            borderRadius: '50%',
            backgroundColor: this.color,
            margin: '10px',
          }}
        />
      );
    }
  }
  
  export class Rectangle implements Shape {
    constructor(public color: string, public width: number, public height: number) {}
  
    clone(): Shape {
      return new Rectangle(this.color, this.width, this.height);
    }
  
    render(): JSX.Element {
      return (
        <div
          style={{
            width: `${this.width}px`,
            height: `${this.height}px`,
            backgroundColor: this.color,
            margin: '10px',
          }}
        />
      );
    }
  }
  
  export class Triangle implements Shape {
    constructor(public color: string, public sideLength: number) {}
  
    clone(): Shape {
      return new Triangle(this.color, this.sideLength);
    }
  
    render(): JSX.Element {
      return (
        <div
          style={{
            width: '0',
            height: '0',
            borderLeft: `${this.sideLength / 2}px solid transparent`,
            borderRight: `${this.sideLength / 2}px solid transparent`,
            borderBottom: `${this.sideLength}px solid ${this.color}`,
            margin: '10px',
          }}
        />
      );
    }
  }
  
  export class Star implements Shape {
    constructor(public color: string, public size: number) {}
  
    clone(): Shape {
      return new Star(this.color, this.size);
    }
  
    render(): JSX.Element {
      return (
        <div
          style={{
            margin: '10px',
            width: '0',
            height: '0',
            borderLeft: `${this.size / 2}px solid transparent`,
            borderRight: `${this.size / 2}px solid transparent`,
            borderBottom: `${this.size}px solid ${this.color}`,
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: `${this.size / 3}px`,
              left: `-${this.size / 2}px`,
              width: '0',
              height: '0',
              borderLeft: `${this.size / 2}px solid transparent`,
              borderRight: `${this.size / 2}px solid transparent`,
              borderTop: `${this.size}px solid ${this.color}`,
            }}
          />
        </div>
      );
    }
  }
  
  