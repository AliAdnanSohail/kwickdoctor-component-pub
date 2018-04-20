install:
	yarn install

develop:
	-yarn run test:update
	-yarn run storybook

test:
	yarn run test

build:
	yarn run clean
	yarn run build