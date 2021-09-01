/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';

import { getByTestId, render } from '@testing-library/svelte';

import Avatar, {
  AvatarBauhaus,
  AvatarBeam,
  AvatarMarble,
  AvatarPixel,
  AvatarRing,
  AvatarSunset,
} from '../src/index';

const variantMapping = {
  bauhaus: AvatarBauhaus,
  beam: AvatarBeam,
  marble: AvatarMarble,
  pixel: AvatarPixel,
  ring: AvatarRing,
  sunset: AvatarSunset,
} as const;

const variants = ['bauhaus', 'beam', 'marble', 'pixel', 'ring', 'sunset'] as const;
describe('Avatar component', () => {
  test('Creates default Avatar', async () => {
    const { getByTestId } = render(Avatar);

    expect(getByTestId('avatar-marble')).toBeInTheDocument();
  });

  test.each(variants)(`Creates %s variant`, (variant) => {
    const { getByTestId } = render(Avatar, { variant });
    expect(getByTestId(`avatar-${variant}`)).toBeInTheDocument();
  });
});

describe('Individual variants', () => {
  test.each(variants)(`Creates %s variant`, (variant) => {
    const { getByTestId } = render(variantMapping[variant]);
    expect(getByTestId(`avatar-${variant}`)).toBeInTheDocument();
  });
});
