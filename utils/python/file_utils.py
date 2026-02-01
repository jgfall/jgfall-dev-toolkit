"""File Utilities for Python Projects.

@description Common file operations and helpers
@author Jackson Fall
"""

import os
import json
import yaml
import shutil
from pathlib import Path
from typing import Any, Dict, List, Optional, Union


def read_file(filepath: Union[str, Path], encoding: str = 'utf-8') -> str:
    """Read text file content.
    
    Args:
        filepath: Path to file
        encoding: File encoding
        
    Returns:
        File content as string
    """
    with open(filepath, 'r', encoding=encoding) as f:
        return f.read()


def write_file(filepath: Union[str, Path], content: str, encoding: str = 'utf-8') -> bool:
    """Write content to file.
    
    Args:
        filepath: Path to file
        content: Content to write
        encoding: File encoding
        
    Returns:
        Success status
    """
    try:
        Path(filepath).parent.mkdir(parents=True, exist_ok=True)
        with open(filepath, 'w', encoding=encoding) as f:
            f.write(content)
        return True
    except Exception as e:
        print(f"Error writing file: {e}")
        return False


def read_json(filepath: Union[str, Path]) -> Dict:
    """Read JSON file.
    
    Args:
        filepath: Path to JSON file
        
    Returns:
        Parsed JSON data
    """
    with open(filepath, 'r') as f:
        return json.load(f)


def write_json(filepath: Union[str, Path], data: Any, indent: int = 2) -> bool:
    """Write data to JSON file.
    
    Args:
        filepath: Path to file
        data: Data to write
        indent: JSON indentation
        
    Returns:
        Success status
    """
    try:
        Path(filepath).parent.mkdir(parents=True, exist_ok=True)
        with open(filepath, 'w') as f:
            json.dump(data, f, indent=indent)
        return True
    except Exception as e:
        print(f"Error writing JSON: {e}")
        return False


def read_yaml(filepath: Union[str, Path]) -> Dict:
    """Read YAML file.
    
    Args:
        filepath: Path to YAML file
        
    Returns:
        Parsed YAML data
    """
    with open(filepath, 'r') as f:
        return yaml.safe_load(f)


def write_yaml(filepath: Union[str, Path], data: Any) -> bool:
    """Write data to YAML file.
    
    Args:
        filepath: Path to file
        data: Data to write
        
    Returns:
        Success status
    """
    try:
        Path(filepath).parent.mkdir(parents=True, exist_ok=True)
        with open(filepath, 'w') as f:
            yaml.dump(data, f, default_flow_style=False)
        return True
    except Exception as e:
        print(f"Error writing YAML: {e}")
        return False


def ensure_dir(directory: Union[str, Path]) -> Path:
    """Ensure directory exists, create if not.
    
    Args:
        directory: Directory path
        
    Returns:
        Path object of directory
    """
    path = Path(directory)
    path.mkdir(parents=True, exist_ok=True)
    return path


def copy_directory(src: Union[str, Path], dst: Union[str, Path]) -> bool:
    """Copy directory recursively.
    
    Args:
        src: Source directory
        dst: Destination directory
        
    Returns:
        Success status
    """
    try:
        shutil.copytree(src, dst, dirs_exist_ok=True)
        return True
    except Exception as e:
        print(f"Error copying directory: {e}")
        return False


def find_files(directory: Union[str, Path], pattern: str = '*') -> List[Path]:
    """Find files matching pattern.
    
    Args:
        directory: Directory to search
        pattern: Glob pattern
        
    Returns:
        List of matching file paths
    """
    return list(Path(directory).rglob(pattern))


def get_file_size(filepath: Union[str, Path], human_readable: bool = False) -> Union[int, str]:
    """Get file size.
    
    Args:
        filepath: Path to file
        human_readable: Return human-readable format
        
    Returns:
        File size in bytes or human-readable string
    """
    size = os.path.getsize(filepath)
    
    if not human_readable:
        return size
    
    for unit in ['B', 'KB', 'MB', 'GB', 'TB']:
        if size < 1024.0:
            return f"{size:.2f} {unit}"
        size /= 1024.0
    
    return f"{size:.2f} PB"
