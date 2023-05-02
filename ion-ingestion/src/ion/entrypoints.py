import click

from ion import __version__ as version, __package_name__ as package_name
from ion.cli.start import start


@click.group(name=package_name)
@click.version_option(version, "--version", "-v", help="Show version and exit")
def main():
    """CLI entrypoint"""
    pass


@main.command()
def info():
    """Information about Data Engine
    Ion Title Type: ANSI Shadow / Default / Default
    """
    LOGO_COLOR = "\033[91m"
    LOGO = rf"""
        
                        ██╗ ██████╗ ███╗   ██╗
                        ██║██╔═══██╗████╗  ██║
                        ██║██║   ██║██╔██╗ ██║
                        ██║██║   ██║██║╚██╗██║
                        ██║╚██████╔╝██║ ╚████║
                        ╚═╝ ╚═════╝ ╚═╝  ╚═══╝
    """
    LOGO_FOOTNOTE = f"{click.style('Made by the Big Data Corp 🐍💚📊', 'red')}\n"
    click.echo(f"{LOGO_COLOR}{LOGO}{LOGO_COLOR}")
    click.echo(LOGO_FOOTNOTE)


main.add_command(start)
