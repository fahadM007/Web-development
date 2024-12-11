# Formatting and Linting

## Learning objectives

- You know what code formatting and linting are and why they are useful.

- You know how to format and lint code with Deno.

### Code formatting

this refree to formating the source code to follwo a set of code conventions
code style using deno fmt comand

Check if the files are formatted:

deno fmt --check

Ignore formatting code by preceding it with an ignore comment:

deno-fmt-ignore

### Linting

is the process of running a program that will analyse code for potential errors

one may identify erros bugs suspicious code and other issues

the deno linter is run by the command deno lint --unstable followed by the file
