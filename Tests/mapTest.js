import { Selector } from 'testcafe';

fixture `fixture`
    .page `https://leafletjs.com/examples/quick-start/`;

test('test', async t => {
    await t
        .switchToIframe('iframe')
        .expect(Selector('path').withAttribute('stroke', 'red').getAttribute('d')).eql('M141.20355555554852,171.94704600190744a42,42 0 1,0 84,0 a42,42 0 1,0 -84,0 ');
});

//just a test