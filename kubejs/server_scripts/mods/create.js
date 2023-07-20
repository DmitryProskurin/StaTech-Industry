// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:create/${id}`;
    let cr = (id) => `create:${id}`;
    let mi = (id) => `modern_industrialization:${id}`;
    let sd = (id) => `sliceanddice:${id}`;
    let mc = (id) => `minecraft:${id}`;

    // -- CREATE REMOVED RECIPES -- //
    const CREATE_DELETED_ITEMS = [
        cr('crafting/kinetics/cogwheel'),
        cr('crafting/kinetics/large_cogwheel'),
        cr('crafting/kinetics/large_cogwheelfrom_little'),
        cr('crafting/kinetics/fluid_tank'),
        cr('smelting/platinum_ingot_compat_modern_industrialization'),
        cr('smelting/silver_ingot_compat_modern_industrialization'),
        cr('blasting/silver_ingot_compat_modern_industrialization'),
        cr('smelting/lead_ingot_compat_techreborn'),
        cr('blasting/lead_ingot_compat_techreborn'),
        cr('blasting/tin_ingot_compat_techreborn'),
        cr('smelting/tin_ingot_compat_techreborn'),
    ];
    CREATE_DELETED_ITEMS.forEach(id => e.remove( {id: id} ));
    e.remove( {type: cr('crushing'), output: cr('crushed_platinum_ore')} );
    e.remove( {mod: 'create', output: mi('uranium_ingot') });

    // -- DOUGH FROM FLOUR AND KIBE WATER BUCKET -- // 
    e.shapeless(cr('dough'), [ cr('wheat_flour'), 'kibe:water_wooden_bucket' ] )
        .id(st('dough'))
        .replaceIngredient('kibe:water_wooden_bucket', 'kibe:wooden_bucket');

    // -- COGWHEEL -- //
    e.shaped(cr('cogwheel'), [
        ' W ',
        'WCW',
        ' W '
    ],
    {
        W: '#minecraft:planks',
        C: cr('shaft')
    })
    .id(st('cogwheel'));

    // -- LARGE COGWHEEL -- //
    e.shaped(cr('large_cogwheel'), [
        'WWW',
        'WCW',
        'WWW'
    ],
    {
        W: '#minecraft:planks',
        C: cr('shaft')
    })
    .id(st('large_cogwheel'));
    // Upgrade from little cogwheel
    e.shaped(cr('large_cogwheel'), [
        ' W ',
        'WCW',
        ' W '
    ],
    {
        W: '#minecraft:planks',
        C: cr('cogwheel')
    })
    .id(st('large_cogwheel_upgrade'));

    // -- TANK -- //
    e.shaped(cr('fluid_tank'), [
        'CGC',
        'GSG',
        'CGC'
    ],
    {
        C: '#c:copper_plates',
        S: '#c:steel_plates',
        G: '#c:glass_blocks'
    })
    .id(st('fluid_tank'));

    // -- SPRINKLER FROM SLICE AND DICE -- //
    e.shaped(sd('sprinkler'), [
        'SPS',
        'SBS'
    ], 
    {
        S: '#c:copper_plates',
        P: cr('fluid_pipe'),
        B: mc('iron_bars')
    })
    .id(st('sprinkler'));
});