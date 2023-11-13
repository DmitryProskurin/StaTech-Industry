// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    let st = (id) => `statech:modern_industrialization/packer/${id}`;

    // -- PACKER REMOVED RECIPES -- //
    const REMOVED_RECIPE = [
        mi('materials/packer/mixed_ingot_blastproof'),
        mi('compat/ae2/printed_calculation_processor'),
        mi('compat/ae2/printed_engineering_processor'),
        mi('compat/ae2/printed_logic_processor'),
        mi('compat/ae2/printed_silicon'),
        mi('compat/ae2/printed_silicon_from_ingot')
    ];
    REMOVED_RECIPE.forEach(id => event.remove({id: id}));

    // -- FLUIX GLASS CABLE -- //
    packer(
        event,
        st('fluix_glass_cable'),
        8,
        200,
        [
            { amount: 2, item: ae('fluix_crystal') },
            { amount: 1, item: ae('quartz_fiber') }
        ],
        [ { amount: 4, item: ae('fluix_glass_cable') } ]
    );

    // -- FLUIX ME COVERED CABLE -- //
    packer(
        event,
        st('fluix_me_covered_cable'),
        8,
        200,
        [
            { amount: 1, tag: mc('wool') },
            { amount: 1, item: ae('fluix_glass_cable') }
        ],
        [ { amount: 1, item: ae('fluix_covered_cable') } ]
    );

    // -- FLUIX ME DENSE COVERED CABLE -- //
    packer(
        event,
        st('fluix_covered_dense_cable'),
        8,
        200,
        [ { amount: 4, item: ae('fluix_covered_cable') } ],
        [ { amount: 1, item: ae('fluix_covered_dense_cable') } ]
    );

    // -- FLUIX ME SMART CABLE -- //
    packer(
        event,
        st('fluix_smart_cable'),
        8,
        200,
        [
            { amount: 1, item: ae('fluix_covered_cable') },
            { amount: 1, item: mc('redstone') },
            { amount: 1, item: mc('glowstone_dust') }
        ],
        [ { amount: 1, item: ae('fluix_smart_cable') } ]
    );

    // -- FLUIX ME DENSE SMART CABLE -- //
    packer(
        event,
        st('fluix_smart_dense_cable_packed'),
        8,
        200,
        [ { amount: 4, item: ae('fluix_smart_cable') } ],
        [ { amount: 1, item: ae('fluix_smart_dense_cable') } ]
    );

    // -- FLUIX DENSE ME SMART CABLE -- //
    packer(
        event,
        st('fluix_smart_dense_cable'),
        8,
        200,
        [
            { amount: 1, item: ae('fluix_covered_dense_cable') },
            { amount: 1, item: mc('redstone') },
            { amount: 1, item: mc('glowstone_dust') }
        ],
        [ { amount: 1, item: ae('fluix_smart_dense_cable') } ]
    );

    // -- SCRAP BOX -- //
    packer(
        event,
        st('scrap_box'),
        2,
        200,
        [
            { amount: 9, item: tr('scrap') },
            { amount: 1, item: mi('packer_block_template'), probability: 0.0 }
        ],
        [ { amount: 1, item: tr('scrap_box') } ]
    );

    // -- FLUID PIPE -- //
    packer(
        event,
        st('fluid_pipe'),
        4,
        200,
        [
            { amount: 1, tag: mi('fluid_pipes') },
            { amount: 2, item: mi('copper_plate') }
        ],
        [ { amount: 8, item: md('fluid_pipe') } ]
    );

    // -- ITEM PIPE -- //
    packer(
        event,
        st('item_pipe'),
        4,
        200,
        [
            { amount: 1, tag: mi('item_pipes') },
            { amount: 2, item: mi('iron_plate') }
        ],
        [ { amount: 8, item: md('item_pipe') } ]
    );

    // -- SUPERCONDUCTOR EU CABLE -- //
    packer(
        event,
        st('superconductor_eu_cable'),
        4,
        200,
        [
            { amount: 1, item: mi('superconductor_cable') },
            { amount: 2, item: mi('rubber_sheet') }
        ],
        [ { amount: 4, item: md('superconductor_cable') } ]
    );

    // -- EV EU CABLE -- //
    packer(
        event,
        st('ev_eu_cable'),
        4,
        200,
        [
            { amount: 1, tag: kj('ev_wire') },
            { amount: 2, item: mi('rubber_sheet') }
        ],
        [ { amount: 4, item: md('ev_cable') } ]
    );

    // -- HV EU CABLE -- //
    packer(
        event,
        st('hv_eu_cable'),
        4,
        200,
        [
            { amount: 1, tag: kj('hv_wire') },
            { amount: 2, item: mi('rubber_sheet') }
        ],
        [ { amount: 4, item: md('hv_cable') } ]
    ); 

    // -- MV EU CABLE -- //
    packer(
        event,
        st('mv_eu_cable'),
        4,
        200,
        [
            { amount: 1, tag: kj('mv_wire') },
            { amount: 2, item: mi('rubber_sheet') }
        ],
        [ { amount: 4, item: md('mv_cable') } ]
    ); 

    // -- LV EU CABLE -- //
    packer(
        event,
        st('lv_eu_cable'),
        4,
        200,
        [
            { amount: 1, tag: kj('lv_wire') },
            { amount: 2, item: mi('rubber_sheet') }
        ],
        [ { amount: 4, item: md('lv_cable') } ]
    );    

    // -- LARGE STEAM MACERATOR -- //
    packer(
        event,
        st('large_steam_macerator'),
        4,
        200,
        [
            { amount: 8, tag: 'c:bronze_plates' },
            { amount: 1, item: mi('steel_macerator') }
        ],
        [ { amount: 1, item: mi('large_steam_macerator') } ]
    );

    // -- PINEAPPLE PIZZA SLICE -- //
    packer(
        event,
        st('pineapple_pizza_slice'),
        4,
        200,
        [ 
            { amount: 1, item: pd('pineapple_side') },
            { amount: 1, item: kj('pizza_slice') }
        ],
        [ { amount: 1, item: kj('pineapple_pizza_slice') } ]
    );

    // -- CONCRETE PINEAPPLE PIZZA SLICE -- //
    packer(
        event,
        st('concrete_pineapple_pizza_slice'),
        4,
        200,
        [
            { amount: 1, item: pd('pineapple_side') },
            { amount: 1, item: kj('concrete_pizza_slice') }
        ],
        [ { amount: 1, item: kj('concrete_pineapple_pizza_slice') } ]
    );

    // -- CHARCOAL BLOCK -- //
    packer(
        event,
        st('charcoal_block'),
        2,
        200,
        [ 
            { amount: 9, item: mc('charcoal') },
            { amount: 1, item: mi('packer_block_template'), probability: 0.0 }
        ],
        [ { amount: 1, item: bl('charcoal_block') } ]
    );

    // -- LARGE STEAM FURNACE -- //
    packer(
        event,
        st('large_steam_furnace'),
        4,
        200,
        [
            { amount: 1, item: mc('furnace') },
            { amount: 7, item: mc('bricks') },
            { amount: 1, item: mi('coke') }
        ],
        [ { amount: 1, item: mi('large_steam_furnace') } ]
    );

    // -- PYRITE DUST -- //
    packer(
        event,
        st('pyrite_dust'),
        8,
        200,
        [ { amount: 4, tag: 'c:pyrite_small_dusts' } ],
        [ { amount: 1, item: tr('pyrite_dust') } ]
    );

    // -- CALCITE DUST -- //
    packer(
        event,
        st('calcite_dust'),
        8,
        200,
        [ { amount: 4, tag: 'c:calcite_small_dusts' } ],
        [ { amount: 1, item: tr('calcite_dust') } ]
    );

    // -- SODALITE DUST -- //
    packer(
        event,
        st('sodalite_dust'),
        8,
        200,
        [ { amount: 4, tag: 'c:sodalite_small_dusts' } ],
        [ { amount: 1, item: tr('sodalite_dust') } ]
    );

    // -- IRIDIUM ALLOY INGOT -- //
    packer(
        event,
        st('iridium_alloy_ingot'),
        24,
        300,
        [
            { amount: 4, item: mi('iridium_plate') },
            { amount: 1, item: mi('diamond_dust') },
            { amount: 4, item: tr('advanced_alloy_plate') }
        ],
        [ { amount: 1, item: tr('iridium_alloy_ingot') } ]
    );

    // -- CHAIN -- //
    packer(
        event,
        st('chain'),
        2,
        100,
        [ { amount: 3, item: mi('iron_ring') } ],
        [ { amount: 8, item: mc('chain') } ]
    );

    // -- MIXED BLASTPROOF INGOT -- //
    packer(
        event,
        st('mixed_blastproof_ingot'),
        32,
        600,
        [
            { amount: 1, item: mi('titanium_ingot') },
            { amount: 1, item: mi('tungsten_ingot') },
            { amount: 1, item: ad('ostrum_ingot') }
        ],
        [ { amount: 1, item: mi('mixed_ingot_blastproof') } ]
    );

    // -- CERTUS QUARTZ BLOCK -- //
    packer(
        event,
        st('quartz_block'),
        8,
        200,
        [ { amount: 4, item: ae('certus_quartz_crystal') } ],
        [ { amount: 1, item: ae('quartz_block') } ]
    );
})