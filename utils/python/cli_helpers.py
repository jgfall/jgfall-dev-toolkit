"""CLI Helper Utilities.

@description Utilities for building command-line interfaces
@author Jackson Fall
"""

import sys
from typing import Optional, List, Callable


class Colors:
    """ANSI color codes for terminal output."""
    
    RESET = '\033[0m'
    BOLD = '\033[1m'
    
    # Foreground colors
    BLACK = '\033[30m'
    RED = '\033[31m'
    GREEN = '\033[32m'
    YELLOW = '\033[33m'
    BLUE = '\033[34m'
    MAGENTA = '\033[35m'
    CYAN = '\033[36m'
    WHITE = '\033[37m'
    
    # Bright foreground colors
    BRIGHT_BLACK = '\033[90m'
    BRIGHT_RED = '\033[91m'
    BRIGHT_GREEN = '\033[92m'
    BRIGHT_YELLOW = '\033[93m'
    BRIGHT_BLUE = '\033[94m'
    BRIGHT_MAGENTA = '\033[95m'
    BRIGHT_CYAN = '\033[96m'
    BRIGHT_WHITE = '\033[97m'


def colorize(text: str, color: str) -> str:
    """Colorize text for terminal output.
    
    Args:
        text: Text to colorize
        color: Color code
        
    Returns:
        Colorized text
    """
    return f"{color}{text}{Colors.RESET}"


def success(message: str):
    """Print success message."""
    print(f"{Colors.GREEN}✓{Colors.RESET} {message}")


def error(message: str):
    """Print error message."""
    print(f"{Colors.RED}✗{Colors.RESET} {message}", file=sys.stderr)


def warning(message: str):
    """Print warning message."""
    print(f"{Colors.YELLOW}⚠{Colors.RESET}  {message}")


def info(message: str):
    """Print info message."""
    print(f"{Colors.BLUE}ℹ{Colors.RESET}  {message}")


def header(text: str, char: str = '='):
    """Print header with separator.
    
    Args:
        text: Header text
        char: Separator character
    """
    print(f"\n{Colors.BOLD}{text}{Colors.RESET}")
    print(char * len(text))


def prompt(question: str, default: Optional[str] = None) -> str:
    """Prompt user for input.
    
    Args:
        question: Question to ask
        default: Default value
        
    Returns:
        User input or default
    """
    if default:
        question = f"{question} [{default}]"
    
    response = input(f"{Colors.CYAN}?{Colors.RESET} {question}: ").strip()
    return response if response else (default or '')


def confirm(question: str, default: bool = False) -> bool:
    """Ask yes/no confirmation.
    
    Args:
        question: Question to ask
        default: Default answer
        
    Returns:
        User's yes/no response
    """
    default_str = 'Y/n' if default else 'y/N'
    response = input(f"{Colors.CYAN}?{Colors.RESET} {question} ({default_str}): ").strip().lower()
    
    if not response:
        return default
    
    return response in ['y', 'yes']


def select(question: str, choices: List[str], default: Optional[int] = None) -> str:
    """Select from multiple choices.
    
    Args:
        question: Question to ask
        choices: List of choices
        default: Default choice index
        
    Returns:
        Selected choice
    """
    print(f"{Colors.CYAN}?{Colors.RESET} {question}")
    
    for i, choice in enumerate(choices, 1):
        default_marker = ' (default)' if default == i - 1 else ''
        print(f"  {i}. {choice}{default_marker}")
    
    while True:
        response = input("Enter choice number: ").strip()
        
        if not response and default is not None:
            return choices[default]
        
        try:
            index = int(response) - 1
            if 0 <= index < len(choices):
                return choices[index]
            else:
                error("Invalid choice. Please try again.")
        except ValueError:
            error("Please enter a number.")


class ProgressBar:
    """Simple progress bar for CLI."""
    
    def __init__(self, total: int, width: int = 50, prefix: str = 'Progress'):
        """Initialize progress bar.
        
        Args:
            total: Total number of items
            width: Width of progress bar
            prefix: Prefix text
        """
        self.total = total
        self.width = width
        self.prefix = prefix
        self.current = 0
    
    def update(self, current: Optional[int] = None):
        """Update progress bar.
        
        Args:
            current: Current progress (or increment by 1 if None)
        """
        if current is not None:
            self.current = current
        else:
            self.current += 1
        
        percent = self.current / self.total
        filled = int(self.width * percent)
        bar = '█' * filled + '░' * (self.width - filled)
        
        sys.stdout.write(f'\r{self.prefix}: |{bar}| {percent:.1%}')
        sys.stdout.flush()
        
        if self.current >= self.total:
            print()  # New line when complete
    
    def finish(self):
        """Complete the progress bar."""
        self.update(self.total)
