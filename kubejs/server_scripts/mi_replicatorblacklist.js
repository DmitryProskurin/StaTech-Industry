// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

// This list is a modified version from the AOF6 modpack
ServerEvents.tags('item', event => {
    const ITEMS = [
        kb('tank'),
        kb('angel_ring'),
        ae('quantum_entangled_singularity'),
        ae('spatial_storage_cell_2'),
        ae('spatial_storage_cell_16'),
        ae('spatial_storage_cell_128'),
        ae('sky_stone_tank'),
        ae('portable_item_cell_1k'),
        ae('portable_item_cell_4k'),
        ae('portable_item_cell_16k'),
        ae('portable_item_cell_64k'),
        ae('portable_item_cell_256k'),
        ae('portable_fluid_cell_1k'),
        ae('portable_fluid_cell_4k'),
        ae('portable_fluid_cell_16k'),
        ae('portable_fluid_cell_64k'),
        ae('portable_fluid_cell_256k'),
        ae('item_storage_cell_1k'),
        ae('item_storage_cell_4k'),
        ae('item_storage_cell_16k'),
        ae('item_storage_cell_64k'),
        ae('item_storage_cell_256k'),
        ae('fluid_storage_cell_1k'),
        ae('fluid_storage_cell_4k'),
        ae('fluid_storage_cell_16k'),
        ae('fluid_storage_cell_64k'),
        ae('fluid_storage_cell_256k'),
        tr('basic_tank_unit'),
        tr('advanced_tank_unit'),
        tr('industrial_tank_unit'),
        tr('quantum_tank_unit'),
        tr('creative_tank_unit'),
        tr('lapotronic_orbpack'),
        tr('crude_storage_unit'),
        tr('basic_storage_unit'),
        tr('advanced_storage_unit'),
        tr('industrial_storage_unit'),
        tr('quantum_storage_unit'),
        tr('uu_matter'),
        tr('scrap_box'),
        tr('low_voltage_su'),
        tr('medium_voltage_su'),
        tr('high_voltage_su'),
        tr('interdimensional_su'),
        tr('auto_crafting_table'),
        kb('golden_lasso'),
        kb('cursed_lasso'),
        kb('diamond_lasso'),
        tr('nuke'),
        ar('everlasting_beef'),
        ar('eternal_steak'),
        tr('heliumplasma_bucket'),
        im('baby_backpack'),
        im('frayed_backpack'),
        im('plated_backpack'),
        im('gilded_backpack'),
        im('bejeweled_backpack'),
        im('blazing_backpack'),
        im('withered_backpack'),
        im('endless_backpack'),
        su('sack'),
        sp('present'),
        kb('cooler'),
        su('safe'),
        cr('chest_minecart_contraption'),
        cr('furnace_minecart_contraption'),
        cr('minecart_contraption'),
        ae('wireless_crafting_terminal'),
        ic('iron_dolly'),
        ic('diamond_dolly'),
        xp('block_xp_obelisk'),
        sp('gloves_of_dawns_grasp'),
        sp('heartsingers_reward'),
        sp('shieldgrasp_amulet'),
        tr('storage_buffer'),
        tr('alloy_smelter'),
        tr('assembly_machine'),
        tr('chemical_reactor'),
        tr('compressor'),
        tr('distillation_tower'),
        tr('extractor'),
        tr('fluid_replicator'),
        tr('grinder'),
        tr('electric_furnace'),
        tr('implosion_compressor'),
        tr('industrial_blast_furnace'),
        tr('industrial_centrifuge'),
        tr('industrial_electrolyzer'),
        tr('industrial_grinder'),
        tr('industrial_sawmill'),
        tr('iron_alloy_furnace'),
        tr('iron_furnace'),
        tr('matter_fabricator'),
        tr('recycler'),
        tr('rolling_machine'),
        tr('scrapboxinator'),
        tr('vacuum_freezer'),
        tr('solid_canning_machine'),
        tr('wire_mill'),
        tr('greenhouse_controller'),
        tr('block_breaker'),
        tr('block_placer'),
        tr('diesel_generator'),
        tr('fusion_control_computer'),
        tr('gas_turbine'),
        tr('plasma_generator'),
        tr('semi_fluid_generator'),
        tr('thermal_generator'),
        tr('adjustable_su'),
        tr('charge_o_mat') ,
        tr('lapotronic_su'),
        tr('quantum_helmet'),
        tr('quantum_chestplate'),
        tr('quantum_leggings'),
        tr('quantum_boots'),
        dr('single_drawer'),
        dr('double_drawer'),
        dr('quad_drawer'),
        dr('shadow_drawer'),
        dr('compacting_drawer'),
        qm('quarry'),
        '#create:toolboxes',
        '#supplementaries:presents',
	    '#supplementaries:trapped_presents',
    ];

    ITEMS.forEach(id => event.add(mi('replicator_blacklist'), id));
});
