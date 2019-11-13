import {Command} from '../command';

export class CommandQueue {

  private commands: Command[];

  public constructor(commands?: Command[]) {

    this.commands = commands ? commands : [];

  }

  public get hasCommands(): boolean {

    return this.commands.length > 0;

  }

  public queueCommand(command: Command) {

    // Todo: filter dups

    this.commands.push(command);

  }

  public queueCommands(commands: Command[]) {

    // Todo: filter dups

    this.commands.push(...commands);

  }

  public processAndClearCommands(): void {

    if (this.hasCommands) {

      this.commands.forEach((command: Command) => command.execute());
      this.commands = [];

    }

  }

}
