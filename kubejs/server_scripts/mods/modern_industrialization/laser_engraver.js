// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    let st = (id) => `statech:modern_industrialization/laser_engraver/${id}`;
    
    // -- PRINTED SILICON -- //
    laserEngraver(
        event,
        st('circuit_silicon'),
        32,
        200,
        [
            { amount: 1, item: ae('silicon_press'), probability: 0.0 },
            { amount: 1, item: ae('silicon') }
        ],
        [ { amount: 1, item: ae('printed_silicon') } ]
    );
    laserEngraver(
        event,
        st('silicon_press_alt'),
        32,
        200,
        [
            { amount: 1, item: ae('silicon_press'), probability: 0.0 },
            { amount: 1, item: mi('silicon_ingot') }
        ],
        [ { amount: 1, item: ae('printed_silicon') } ]
    );

    // -- PRINTED CALCULATION CIRCUIT -- //
    laserEngraver(
        event,
        st('circuit_calculation'),
        32,
        200,
        [
            { amount: 1, item: ae('calculation_processor_press'), probability: 0.0 },
            { amount: 1, item: ae('certus_quartz_crystal') }
        ],
        [ { amount: 1, item: ae('printed_calculation_processor') } ]
    );

    // -- PRINTED ENGINEERING CIRCUIT -- //
    laserEngraver(
        event,
        st('circuit_engineering'),
        32,
        200,
        [
            { amount: 1, item: ae('engineering_processor_press'), probability: 0.0 },
            { amount: 1, item: mc('diamond') }
        ],
        [ { amount: 1, item: ae('printed_engineering_processor') } ]
    );

    // -- PRINTED LOGIC CIRCUIT -- //
    laserEngraver(
        event,
        st('circuit_logic'),
        32,
        200,
        [
            { amount: 1, item: ae('logic_processor_press'), probability: 0.0 },
            { amount: 1, item: mc('gold_ingot') }
        ],
        [ { amount: 1, item: ae('printed_logic_processor') } ]
    );

    // -- SILICON PRESS -- //
    laserEngraver(
        event,
        st('dupe_silicon_press'),
        32,
        200,
        [
            { amount: 1, item: ae('silicon_press'), probability: 0.0 },
            { amount: 1, item: mc('iron_block') }
        ],
        [ { amount: 1, item: ae('silicon_press') } ]
    );

    // -- CALCULATION PRESS -- //
    laserEngraver(
        event,
        st('dupe_calculation_press'),
        32,
        200,
        [
            { amount: 1, item: ae('calculation_processor_press'), probability: 0.0 },
            { amount: 1, item: mc('iron_block') }
        ],
        [ { amount: 1, item: ae('calculation_processor_press') } ]
    );

    // -- ENGINEERING PRESS -- //
    laserEngraver(
        event,
        st('dupe_engineering_press'),
        32,
        200,
        [
            { amount: 1, item: ae('engineering_processor_press'), probability: 0.0 },
            { amount: 1, item: mc('iron_block') }
        ],
        [ { amount: 1, item: ae('engineering_processor_press') } ]
    );

    // -- LOGIC PRESS -- //
    laserEngraver(
        event,
        st('dupe_logic_press'),
        32,
        200,
        [
            { amount: 1, item: ae('logic_processor_press'), probability: 0.0 },
            { amount: 1, item: mc('iron_block') }
        ],
        [ { amount: 1, item: ae('logic_processor_press') } ]
    );

    // -- CRUSHER MODELS -- //
    const modelItemList = [
        //  Model                           Item
        [ kj('enderman_model'),         mc('ender_pearl') ],
        [ kj('zombie_model'),           mc('rotten_flesh') ],
        [ kj('skeleton_model'),         mc('bone') ],
        [ kj('pig_model'),              mc('porkchop') ],
        [ kj('sheep_model'),            mc('mutton') ],
        [ kj('cow_model'),              mc('beef') ],
        [ kj('chicken_model'),          mc('chicken') ],
        [ kj('squid_model'),            mc('ink_sac') ],
        [ kj('spider_model'),           mc('spider_eye') ],
        [ kj('creeper_model'),          mc('gunpowder') ],
        [ kj('slime_model'),            mc('slime_ball') ],
        [ kj('ghast_model'),            mc('ghast_tear') ],
        [ kj('zombie_piglin_model'),    mc('gold_nugget') ],
        [ kj('magma_cube_model'),       mc('magma_cream') ],
        [ kj('blaze_model'),            mc('blaze_rod') ],
        [ kj('wither_skeleton_model'),  ap('withered_bone') ],
        [ kj('guardian_model'),         mc('prismarine_shard') ],
        [ kj('witch_model'),            mc('glass_bottle') ],
        [ kj('rabbit_model'),            mc('rabbit') ],
        [ kj('phantom_model'),            mc('phantom_membrane') ]
    ];
    modelItemList.forEach(modelItem => {
        let model = modelItem[0];
        let item = modelItem[1];
        laserEngraver(
            event,
            st(model.split(':')[1]),
            32,
            200,
            [ 
                { amount: 1, item: ae('basic_card') },
                { amount: 1, item: item }
            ],
            [ { amount: 1, item: model } ]
        );
    });

    // -- BOSS CRUSHER MODELS -- //
    const bossModelItemList = [
        //  Model                           Item        Amount
        [ kj('wither_model'),  kj('withered_soc'),      1 ],
        [ kj('dragon_model'),  mc('end_crystal'),       4 ],
        [ kj('warden_model'),  mc('echo_shard'),        4 ]
    ];
    bossModelItemList.forEach(bossModelItem => {
        let bossModel = bossModelItem[0];
        let bossItem = bossModelItem[1];
        let bossItemAmount = bossModelItem[2];
        laserEngraver(
            event,
            st(bossModel.split(':')[1]),
            32,
            200,
            [ 
                { amount: 1, item: ae('advanced_card') },
                { amount: bossItemAmount, item: bossItem }
            ],
            [ { amount: 1, item: bossModel } ]
        );
    });
});