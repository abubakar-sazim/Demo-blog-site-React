import { useMantineColorScheme, Button, Group } from '@mantine/core';

const ColorSchemeButton = () => {
    const { setColorScheme, clearColorScheme } = useMantineColorScheme();
    return (
        <Group>
        <Button onClick={() => setColorScheme('light')}>Light</Button>
        <Button onClick={() => setColorScheme('dark')}>Dark</Button>
        <Button onClick={() => setColorScheme('auto')}>Auto</Button>
        <Button onClick={clearColorScheme}>Clear</Button>
    </Group>
    );
}

export default ColorSchemeButton;