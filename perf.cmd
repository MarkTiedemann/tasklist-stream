@echo off

:: this script requires 'timeit' from the Windows Server 2003 Resource Kit Tools
:: download it here: https://www.microsoft.com/en-us/download/details.aspx?id=17657

echo;
echo timeit tasklist
timeit tasklist > nul

echo;
echo tasklist /v
timeit tasklist /v > nul